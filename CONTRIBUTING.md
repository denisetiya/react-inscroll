# Contributing to React InScroll

Thank you for your interest in contributing to React InScroll! 🎉

## Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/react-inscroll.git
   cd react-inscroll
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build Library**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── InScrollElement.tsx    # Main animation component
│   │   └── InScrollProvider.tsx   # Context provider
│   ├── hooks/
│   │   ├── useInView.ts          # Intersection observer hook
│   │   ├── useInScrollConfig.ts  # Configuration hook
│   │   └── useClickableAnimation.ts # Interactive demo hook
│   ├── context/
│   │   └── InScrollContext.ts    # React context
│   ├── styles/
│   │   └── animations.css        # CSS animations
│   ├── types.ts                  # TypeScript definitions
│   └── index.ts                  # Main exports
└── App.tsx                       # Demo application
```

## Guidelines

### Code Style
- Use TypeScript for all new code
- Follow existing code formatting
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### Adding New Animations
1. Add animation type to `types.ts`
2. Create CSS animation in `animations.css`
3. Update documentation and examples

### Testing
```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Pull Request Process
1. Create a feature branch
2. Make your changes
3. Add tests if needed
4. Update documentation
5. Submit pull request

## Questions?

Feel free to open an issue for any questions or suggestions!
