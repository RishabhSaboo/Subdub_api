import { Router } from 'express'
import authorize from '../middlewares/auth.middleware.js';
import { createSubscription, getUserSubscription } from '../controllers/subscription.controller.js';

const subscriptionRouter=Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({message : 'GET all subscriptions'})
 });

subscriptionRouter.get('/:id',(req, res) => {
    res.send({message : 'get this subscription'})
 });

subscriptionRouter.post('/',authorize,createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
    res.send({message : 'update this subscription'})
 });

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({message : 'delete this subscription'})
 });

 subscriptionRouter.get('/user/:id',authorize,getUserSubscription);

 subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({message : "cancel subscription details"})
 });

 subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({message : "get upcoming renewals"})
 });

 export default  subscriptionRouter