import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const palette = {
  warmDark: {
    background: "#1e1b18",
    text: "#f5f5dc",
    primary: "#ff7b54",
    secondary: "#ffb26b",
  },
  warmLight: {
    background: "#f5f5dc",
    text: "#1e1b18",
    primary: "#ff7b54",
    secondary: "#a06f55",
  },
};

const ThemeContext = React.createContext();

const Layout = ({ children }) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <div
      className="min-h-screen font-sans flex flex-col"
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      <Helmet>
        <title>My Dev Blog</title>
        <meta name="description" content="Personal blog of a software engineer." />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <header className="p-4 flex justify-between items-center shadow-md">
        <nav className="flex space-x-4 items-center">
          <Link to="/" className="text-xl font-bold">
            DevBlog
          </Link>
          <Link to="/posts" className="hover:underline">
            Posts
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
        <button onClick={toggleTheme} className="p-2">
          {theme === palette.warmDark ? <Sun /> : <Moon />}
        </button>
      </header>
      <main className="p-4 max-w-4xl mx-auto flex-grow">{children}</main>
      <footer className="p-4 text-center text-sm opacity-70 border-t">
        © {new Date().getFullYear()} DevBlog. All rights reserved.
      </footer>
    </div>
  );
};

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-3xl font-bold mb-4">Welcome to My Blog</h1>
    <p className="mb-6">
      I'm a software engineer sharing thoughts on code, tech, and productivity.
    </p>
    <Link
      to="/posts"
      className="bg-[var(--primary)] text-white px-4 py-2 rounded hover:opacity-90"
      style={{ backgroundColor: palette.warmDark.primary }}
    >
      Read Posts
    </Link>
  </motion.div>
);

const Posts = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
    <ul className="space-y-4">
      <li>
        <Link to="/posts/how-to-build-a-blog" className="text-lg font-medium underline">
          How to Build a Blog with React & TailwindCSS
        </Link>
        <p className="text-sm text-gray-400">#React #Tailwind #Blog</p>
      </li>
    </ul>
  </motion.div>
);

const About = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="text-lg leading-relaxed">
      Hi, I’m a passionate software engineer who loves clean code, modern design,
      and building tools that help people. I specialize in front-end and full-stack
      development. This blog is my space to share what I learn and build.
    </p>
  </motion.div>
);

const Contact = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
    <p className="mb-4">Feel free to reach out via email or follow me on socials:</p>
    <ul className="space-y-2">
      <li>Email: <a href="mailto:you@example.com" className="underline">you@example.com</a></li>
      <li>GitHub: <a href="https://github.com/yourhandle" className="underline">@yourhandle</a></li>
      <li>Twitter: <a href="https://twitter.com/yourhandle" className="underline">@yourhandle</a></li>
    </ul>
  </motion.div>
);

const App = () => {
  const [theme, setTheme] = useState(palette.warmDark);

  const toggleTheme = () => {
    setTheme((prev) => (prev === palette.warmDark ? palette.warmLight : palette.warmDark));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
