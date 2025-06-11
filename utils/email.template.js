// utils/emailTemplates.js
export function getSubscriptionCreatedEmail(user, subscription) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; padding: 20px; background: #f9f9f9;">
        <h2 style="color: #333;">Subscription Created 🎉</h2>
        <p>Hi ${user.name || 'there'},</p>
        <p>Your subscription has been successfully created. Here are the details:</p>
  
        <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="color: #4CAF50; margin-top: 0;">${subscription.name}</h3>
          <p><strong>Category:</strong> ${subscription.category}</p>
          <p><strong>Price:</strong> ${subscription.price.toFixed(2)} ${subscription.currency}</p>
          <p><strong>Frequency:</strong> ${subscription.frequency}</p>
          <p><strong>Payment Method:</strong> ${subscription.paymentMethod}</p>
          <p><strong>Status:</strong> ${subscription.status}</p>
          <p><strong>Start Date:</strong> ${new Date(subscription.startDate).toLocaleDateString()}</p>
          <p><strong>Renewal Date:</strong> ${subscription.renewalDate ? new Date(subscription.renewalDate).toLocaleDateString() : 'N/A'}</p>
        </div>
  
        <p>Thank you for choosing us!</p>
        <hr />
        <p style="font-size: 0.8em; color: #999;">If you did not create this subscription, please contact support immediately.</p>
      </div>
    `;
  }
  