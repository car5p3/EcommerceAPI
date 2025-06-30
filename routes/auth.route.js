import { Router } from "express";
import { authCallback, forgotPassword, login, logout, resetPassword, signup, verifyEmail } from "../controllers/auth.controller.js";
import { protect } from "../middlewares/isLoggedIn.js";
import passport from "passport";

const router = Router();

router.post('/signup', signup);
router.post('/login', login)
router.post('/verify-email', protect, verifyEmail);
router.post('/forgot-password', protect, forgotPassword);
router.post('/reset-password/:token', protect, resetPassword);
router.post('/logout', protect, logout);

// Google Auth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { session: true }), authCallback);

// GitHub Auth
router.get("/github", passport.authenticate("github"));
router.get("/github/callback", passport.authenticate("github", { session: true }), authCallback);

export default router;