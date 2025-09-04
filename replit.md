# Teacher's Day Greeting Card

## Overview

This is a Flask-based web application that displays an animated greeting card celebrating Teacher's Day, specifically designed for "Teacher Joyce Nan". The application features a single-page interactive greeting card with vibrant animations, confetti effects, and celebratory elements. It's built as a simple tribute application with a focus on visual appeal and user engagement through animations and interactive elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

**Frontend Architecture**
- Single-page application using server-side rendering with Jinja2 templates
- Bootstrap 5 for responsive grid system and base styling
- Custom CSS with CSS animations, gradients, and keyframe animations
- Vanilla JavaScript for interactive features like confetti effects, icon interactions, and celebration triggers
- Font Awesome icons and Google Fonts (Dancing Script, Poppins) for enhanced typography and iconography

**Backend Architecture**
- Minimal Flask application with a single route serving the greeting card
- Session management configured with environment-based secret key
- Debug logging enabled for development
- Static file serving for CSS, JavaScript, and potential asset files
- Environment variable support for configuration (SESSION_SECRET)

**Styling and Animation System**
- CSS custom properties (variables) for consistent color theming
- Complex gradient backgrounds with animation cycling
- Keyframe animations for card entrance effects, gradient shifts, and interactive elements
- Responsive design principles with Bootstrap integration
- Backdrop blur effects and transparency for modern visual appeal

**Interactive Features**
- JavaScript-driven confetti generation system
- Icon interaction handlers for celebration effects
- Audio context initialization for potential sound integration
- Event-driven architecture for user interactions

## External Dependencies

**Frontend Libraries**
- Bootstrap 5.3.0 via CDN for responsive design framework
- Font Awesome 6.4.0 via CDN for iconography
- Google Fonts API for custom typography (Dancing Script, Poppins fonts)

**Python Framework**
- Flask web framework for serving the application
- Jinja2 templating engine (included with Flask) for HTML rendering

**Runtime Environment**
- Designed for deployment on platforms supporting Python web applications
- Configured for development with debug mode and host binding to 0.0.0.0:5000
- Environment variable support for production configuration