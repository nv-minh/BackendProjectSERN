import { registerService, loginService } from "../services/auth";

const register = async (req, res) => {
  const { userName, phone, password } = req.body;
  // Simple validation
  if (!userName || !phone || !password) {
    return res.status(400).json({
      success: false,
      message: "Missing username or phone or password",
    });
  }
  try {
    const response = await registerService({ userName, phone, password, res });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed at register controller: " + error,
    });
  }
};

const login = async (req, res) => {
  const { phone, password } = req.body;
  try {
    if (!phone || !password)
      return res.status(400).json({
        success: false,
        message: "Missing inputs !",
      });
    const response = await loginService({ phone, password });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed at login controller: " + error,
    });
  }
};

module.exports = {
  register,
  login,
};
