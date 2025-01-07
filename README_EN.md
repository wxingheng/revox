[![npm version](https://img.shields.io/npm/v/revox.svg)](https://www.npmjs.com/package/revox)
[![license](https://img.shields.io/npm/l/revox.svg)](https://github.com/wxingheng/revox/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)
[![Node Version](https://img.shields.io/node/v/revox.svg)](https://nodejs.org)
[![Downloads](https://img.shields.io/npm/dm/revox.svg)](https://www.npmjs.com/package/revox)
[![Issues](https://img.shields.io/github/issues/wxingheng/revox.svg)](https://github.com/wxingheng/revox/issues)

<h4>A powerful React component generation and management tool for efficient and standardized development</h4>

English | [简体中文](./README.md)

</div>

## 🎯 Project Vision

Revox was born from the pursuit of modern development efficiency and the vision of AI-assisted programming future. The entire project, from conception to release, was completed in just 3 hours, demonstrating the power of AI-driven development:

- 🤖 **Embrace AI Programming** - Developed using AI programming tools like [Cursor](https://www.cursor.com/), the project went from concept to full implementation in just 3 hours, perfectly illustrating the efficiency revolution of AI-driven development
- ⚡️ **Efficiency First** - Significantly improve daily development efficiency through intelligent tools and processes. Just as Revox's own development process, including development, testing, release, and documentation, was completed with high quality in minimal time
- 🎨 **Best Practices** - Transform accumulated development experience and best practices into reusable tools and templates
- 🌟 **Open Sharing** - Looking forward to building smarter and more efficient development tools through the power of the open source community

> 💡 The project's [commit history](https://github.com/wxingheng/revox/commits/main/) shows that within just 3 hours, we completed the entire process from initialization to releasing version 0.0.5, including:
> - Core functionality development
> - Complete documentation
> - NPM package publishing
> - Multi-language support
> This fully demonstrates the powerful potential of AI-assisted development.

## ✨ Features

- 🎯 **Standardized Templates** - Generate React component structures following best practices with one command
- 🔄 **Template Conversion** - Easily convert existing components into reusable templates
- 🎨 **Complete Ecosystem** - Auto-generate styles, types, contexts, and utility files
- ⚙️ **Highly Configurable** - Support custom templates and configuration options
- 📦 **Ready to Use** - Built-in practical templates for quick start
- 🛠 **Extensible** - Plugin mechanism for feature extensions


## 📦 Installation

```bash
npm install -g revox
# or
yarn global add revox
# or
pnpm add -g revox
```

## 🚀 Quick Start

### 1. Initialize Configuration (Optional)

```bash
revox init
```

This will create a `.revox` folder in your project root for custom templates and configurations.

### 2. Generate Components

```bash
# Generate standard component
revox generate rfc.comp MyComponent

# Generate complete feature module
revox generate rfc.module MyModule

# Use custom template
revox generate rfc.custom MyCustom
```

## 📚 Command Details

### generate

Generate components or modules:

```bash
revox generate <template> <name> [options]

Options:
  -f, --force    Force overwrite existing files
  -d, --dir      Specify output directory
```

### template

Template management:

```bash
# Convert component to template
revox tool tmp ./src/Button

# List all available templates
revox tool tmp ./components/Modal
```

## 📁 Directory Structure

Example of generated component structure:

```
MyComponent/
├── components/          # Sub-components
│   └── SubComponent/     
├── context/            # Context related
├── hooks/              # Custom Hooks
├── types/              # TypeScript types
├── utils/              # Utility functions
├── index.tsx           # Component entry
├── style.module.css    # Style file
└── README.md           # Component documentation
```

## 🤝 Contributing

We welcome all forms of contributions, whether it's new features, documentation improvements, or bug fixes.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

If you've found a bug or have a new idea, feel free to [create an issue](https://github.com/wxingheng/revox/issues).

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for detailed update history.

## 🎯 Roadmap

- [ ] Support more template types
- [ ] Add template marketplace
- [ ] Provide Web UI configuration interface
- [ ] Support component preview
- [ ] Integrate unit test generation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app)

## 📮 Contact

- Author: wxingheng
- Email: [wxingheng@outlook.com](mailto:wxingheng@outlook.com)
- GitHub: [@wxingheng](https://github.com/wxingheng)

---

If this project helps you, please consider giving it a star! ⭐️ 
