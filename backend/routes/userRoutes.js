import express from "express";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();
import { 
  authUser, 
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile  } from "../controllers/userController.js";



/*@ The post req to our http://api/users/auth which will call the callback auth
user in our userController.js file */ 
router.post('/auth', authUser);


router.post('/', registerUser);

router.post('/logout', logoutUser);

router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile)

export default router;