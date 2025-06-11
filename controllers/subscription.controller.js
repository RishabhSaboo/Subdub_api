import { EMAIL_PASS, EMAIL_USER } from "../config/env.js";
import Subscription from "../models/subscription.model.js"
import nodemailer from "nodemailer";

export const createSubscription =async (req,res,next)=>{
    try{

        const subscription=await Subscription.create({
            ...req.body,
            user: req.user._id
        })
        
        // Send email notification
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS
        },
      });
  
      const mailOptions = {
        from: `"SubDub App" <${EMAIL_USER}>`, 
        to: req.user.email,
        subject: "Subscription Created",
        text: `Hi ${req.user.name || 'there'},\n\nYour subscription has been successfully created.\n\nThanks!`,
      };
      console.log(req.user.email)
  
      await transporter.sendMail(mailOptions);
      console.log("Email sent to:", req.user.email);
  

        res.status(201).json({
            success: true,
            data: subscription
          })

    }
    catch(error){
        next(error)
    }

}

export const getUserSubscription =async (req,res,next)=>{
    try{

        if (req.user._id.toString() !== req.params.id) {
            const error = new Error("you are not its owner");
            error.status = 401;
            throw error;
        }
        const subscription=await Subscription.find({user:req.params.id});
        res.status(200).json({
            success: true,
            data: subscription
          })
    }
    catch(error){
        next(error)
    }

}