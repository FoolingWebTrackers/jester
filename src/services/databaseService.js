import { Client } from 'pg';
import SecurityService from 'SecurityService.js'; 

class DatabaseService {
  constructor() {
    // Configure PostgreSQL connection
    this.client = new Client({
      user: 'your_db_user',
      host: 'your_laptop_ip',
      database: 'your_database',
      password: 'your_password',
      port: 5432, // Default PostgreSQL port
    });
    this.client.connect();
    this.SecurityService = new SecurityService();
  }

  async createUser(username, password) {

    const salt = this.SecurityService.generateSalt();
    const hashedPassword = this.SecurityService.hasedPassword(password, salt)

    const query = 'INSERT INTO users (username, password, salt) VALUES ($1, $2, $3)';
    const values = [username, hashedPassword, salt];
    try {
      const result = await this.client.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

}