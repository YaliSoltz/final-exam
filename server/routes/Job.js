const { Router } = require("express");
const { Job, joiSchema } = require("../model/job");
const router = Router();

// get all the jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find().populate({
    path: "registered",
    select: ["name", "phoneNumber"],
  });
  res.status(200).send(jobs);
});

// add new job
router.post("/", async (req, res) => {
  const body = req.body;
  const { error } = joiSchema.validate(body); // validate the client
  if (error) return res.status(400).send(error.message);

  const { title, content } = body;
  let job = new Job({
    title,
    content,
    registered: [],
  });
  try {
    job = await job.save();
    res.status(201).send(job);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// add new user to the registered users
router.put("/", async (req, res) => {
  const body = req.body;
  const { userId, jobId } = body;
  let job = await Job.findById(jobId);

  if (job.registered.includes(userId))
    return res.status(400).send("you already registered for this job"); // check if user already registered for this job

  try {
    job = await Job.findOneAndUpdate(
      { _id: jobId },
      {
        $set: { registered: [...job.registered, userId] },
      },
      { new: true }
    );
    res.status(201).send(job);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
