import { findAllSubjects } from "../models/subjectModel.js";
import { findTopicById } from "../models/topicModel.js";

export async function getSubjects(req, res) {
  try {
    const subjects = await findAllSubjects();
    res.status(200).json(subjects);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function getTopic(req, res) {
  try {
    const topic = await findTopicById(req.params.id);

    if (!topic) {
      return res.status(404).json({ message: "Conteúdo não encontrado" });
    }

    res.status(200).json(topic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
