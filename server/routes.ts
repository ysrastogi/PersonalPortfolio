import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate the data
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      // In a real application, this data would be saved to a database
      // or forwarded to an email service

      // Just returning success for this demo
      res.status(200).json({ 
        message: 'Message received successfully',
        success: true
      });
    } catch (error) {
      console.error('Error processing contact form submission:', error);
      res.status(500).json({ message: 'Failed to process your message' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
