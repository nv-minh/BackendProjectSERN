import * as services from "../services/user";

export const getCurrent = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.getOne(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed at category controller: " + error,
    });
  }
};
export const updateUser = async (req, res) => {
  const { id } = req.user;
  if (!req.body) {
    return res.status(404).json({
      error: "Invalid",
      message: "missing payload",
    });
  }

  try {
    const response = await services.updateUserService(req.body, id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed at category controller: " + error,
    });
  }
};
