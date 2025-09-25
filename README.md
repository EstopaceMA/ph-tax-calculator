# Philippines Tax Directory

A comprehensive tax directory and calculator for the Philippines, featuring modern UI, multiple tax types, forms library, filing calendar, and more.

## Getting Started

You can run this application in two ways: using Docker (recommended for beginners) or traditional Node.js setup.

### 🐳 Option 1: Docker Setup (Recommended)

#### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Compose)
- Git

#### Quick Start with Docker
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ph-tax-directory
   ```

2. **Copy environment file:**
   ```bash
   copy .env.example .env
   ```
   *On Mac/Linux, use `cp .env.example .env`*

3. **Start the application:**
   ```bash
   cd docker
   docker-compose up --build
   ```

4. **Access the application:**
   - **Main app**: http://localhost:5173
   - **With Nginx**: http://localhost:80 (if nginx service is enabled)

#### Docker Management Commands
- **Stop the application:** `docker-compose down`
- **View logs:** `docker-compose logs -f app`
- **Rebuild after changes:** `docker-compose up --build`
- **Run in background:** `docker-compose up -d`

#### Docker Services
- **app**: Main React application running on Vite dev server
- **nginx**: Reverse proxy for production-like setup (optional)

### 🔧 Option 2: Traditional Node.js Setup

#### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

#### Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ph-tax-directory
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to** `http://localhost:5173`

### 🎯 For Beginners

If you're new to development, Docker is the easiest way to get started:

1. **Download Docker Desktop** from https://www.docker.com/products/docker-desktop/
2. **Install and start Docker Desktop**
3. **Follow the Docker Setup steps above** - that's it!

No need to install Node.js, manage versions, or worry about dependencies. Docker handles everything for you!

## Features

### 🧮 Tax Calculators
- **Compensation Income Tax Calculator**: Calculate monthly and annual income tax with SSS, PhilHealth, and Pag-IBIG contributions
- **VAT Calculator**: Calculate 12% VAT for both inclusive and exclusive amounts

### 📋 Tax Directory Sections
- **Taxpayer Categories**: Understanding different taxpayer types and their obligations
- **Forms Library**: Access to BIR forms and filing guides
- **Filing Calendar**: Tax deadlines and important reminders
- **Tax Rates & Tables**: Current tax rates and brackets
- **FAQs**: Frequently asked questions about Philippine taxation

## Available Scripts

### Docker Commands
- `docker-compose up --build` - Start application with Docker (from `/docker` folder)
- `docker-compose down` - Stop all containers
- `docker-compose logs -f app` - View application logs
- `docker-compose exec app npm install <package>` - Install new packages

### Node.js Commands (Traditional Setup)
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## 🔧 Troubleshooting

### Docker Issues
- **"docker-compose not found"**: Make sure Docker Desktop is installed and running
- **Port already in use**: Change ports in `.env` file (APP_PORT, NGINX_PORT)
- **Permission errors**: On Linux/Mac, you might need `sudo` for Docker commands
- **Hot reload not working**: Make sure you're mounting the source code correctly (check docker-compose.yml)

### General Issues
- **Cannot access localhost**: Try http://127.0.0.1:5173 instead
- **Styles not loading**: Clear browser cache and restart the container
- **Build fails**: Delete `node_modules` and rebuild: `docker-compose down && docker-compose up --build`

### Getting Help
1. Check Docker Desktop is running
2. Ensure no other applications are using ports 5173 or 80
3. Try rebuilding: `docker-compose up --build`
4. Check logs: `docker-compose logs -f`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Disclaimer

This tax directory provides information based on current BIR tax rates, regulations, and forms. Tax calculations, deadlines, and requirements may vary based on specific circumstances, available deductions, exemptions, or policy changes. Please consult with a tax professional or the [Bureau of Internal Revenue (BIR)](https://www.bir.gov.ph/) for official guidance and the most up-to-date information.

## License

This project is part of [BetterGov.ph](https://www.bettergov.ph/)

## Related Links

- [Bureau of Internal Revenue (BIR)](https://www.bir.gov.ph/)
- [BetterGov.ph](https://www.bettergov.ph/)
- [SSS Official Website](https://www.sss.gov.ph/)
- [PhilHealth Official Website](https://www.philhealth.gov.ph/)
- [Pag-IBIG Fund Official Website](https://www.pagibigfund.gov.ph/)
