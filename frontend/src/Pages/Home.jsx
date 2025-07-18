import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <div>
           <main>
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <h2 class="hero-title">Streamline Your Workforce Management</h2>
                    <p class="hero-description">
                        ChroneCore is the ultimate employee management solution that helps you track, manage, and optimize your workforce with powerful analytics and intuitive design.
                    </p>
                    <div class="hero-buttons">
                        <button class="btn btn-primary">Get Started</button>
                        <button class="btn btn-secondary">Learn More</button>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="floating-card">
                        <div class="card-header">Employee Dashboard</div>
                        <div class="card-stats">
                            <div class="stat">
                                <span class="stat-number">1,247</span>
                                <span class="stat-label">Active Employees</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">98%</span>
                                <span class="stat-label">Attendance Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="features" id="features">
            <div class="container">
                <h2 class="section-title">Why Choose ChroneCore?</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">👥</div>
                        <h3>Employee Tracking</h3>
                        <p>Comprehensive employee profiles with real-time status updates and performance metrics.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📊</div>
                        <h3>Analytics Dashboard</h3>
                        <p>Advanced reporting and analytics to make data-driven decisions for your organization.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">⏰</div>
                        <h3>Time Management</h3>
                        <p>Automated time tracking, attendance monitoring, and leave management system.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🔒</div>
                        <h3>Secure & Reliable</h3>
                        <p>Enterprise-grade security with role-based access control and data encryption.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta">
            <div class="container">
                <h2>Ready to Transform Your HR Operations?</h2>
                <p>Join thousands of companies who trust ChroneCore for their employee management needs.</p>
                <button class="btn btn-primary btn-large">Start Free Trial</button>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>ChroneCore</h3>
                    <p>Empowering businesses with intelligent employee management solutions.</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Documentation</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contact</h4>
                    <ul>
                        <li>Email: info@chronecore.com</li>
                        <li>Phone: +1 (555) 123-4567</li>
                        <li>Address: 123 Business Ave, Tech City</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 ChroneCore. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}
