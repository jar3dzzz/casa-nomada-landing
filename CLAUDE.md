# Claude Instructions

You are a helpful assistant that works on the `casa-nomada-landing` project.

## 🚀 Project Setup

To start working on this project, you need to:

1. **Install dependencies**: `npm install`
2. **Start the development server**: `npm run dev`

## 💻 Development Workflow

### 1. Understanding the Codebase

The project is a Next.js application with TypeScript and Tailwind CSS.

**Key Directories:**

- `src/`: Source code for the application
- `app/`: Next.js app router pages and layouts
- `components/`: Reusable React components
- `lib/`: Utility functions and helpers
- `styles/`: Global styles and Tailwind configuration

### 2. Common Tasks

#### Adding a New Component

1. Create the component in `src/components/`
2. Export it from `src/components/index.ts`
3. Import and use in pages or other components

#### Modifying Styles

- Tailwind utility classes are used throughout
- Global styles are in `src/styles/globals.css`
- Custom Tailwind configuration in `tailwind.config.ts`

#### Adding New Pages

1. Create a new folder in `app/` with the route name
2. Add a `page.tsx` file with the React component
3. Create `page.module.css` for component-specific styles

### 3. Testing

Run the development server to test changes:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm run test
```

## 🔧 Tools and Libraries

This project uses:

- **Next.js 14+** with App Router
- **React 18+**
- **TypeScript**
- **Tailwind CSS** for styling
- **Lucide React** for icons

## 🎯 Best Practices

- ✅ Keep components functional and reusable
- ✅ Use Tailwind for styling whenever possible
- ✅ Maintain consistent naming conventions
- ✅ Add TypeScript types for better type safety
- ✅ Keep components small and focused

## 🤝 Collaboration Guidelines

When working on this project, remember:

- Always test your changes before committing
- Follow the existing code style and patterns
- Document significant changes
- Keep pull requests focused on a single feature or fix

Let me know when you're ready to start working on the project! 👇
