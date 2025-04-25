import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import React, { useState, useContext, useEffect } from "react";
import contents from "./contents";

const Page = ({ children }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    {children}
  </motion.div>
);

const ThemeContext = React.createContext();

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen font-sans flex flex-col ${theme === 'dark' ? 'dark' : ''}`}
      style={{ backgroundColor: 'var(--tw-prose-body)', color: 'var(--tw-prose-headings)' }}
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
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
      </header>
      <main className="p-4 max-w-6xl mx-auto flex-grow">{children}</main>
      <footer className="p-4 text-center text-sm opacity-70 border-t">
        © {new Date().getFullYear()} DevBlog. All rights reserved.
      </footer>
    </div>
  );
};

const Home = () => (
  <Page>
    <h1 className="text-3xl font-bold mb-4">Welcome to My Blog</h1>
    <p className="mb-6">
      I'm a software engineer sharing thoughts on code, tech, and productivity.
    </p>
    <Link
      to="/posts"
      className="px-4 py-2 rounded"
      style={{
        backgroundColor: `var(--tw-prose-links)`,
        color: `var(--tw-prose-body)`,
        transition: 'background-color 0.3s, opacity 0.3s',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = `var(--tw-prose-headings)`;
        e.target.style.opacity = '0.9';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = `var(--tw-prose-links)`;
        e.target.style.opacity = '1';
      }}
    >
      Read Posts
    </Link>

  </Page>
);

const Posts = () => (
  <Page>
    <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
    <ul className="space-y-4">
      <li>
        <Link to="/posts/how-to-build-a-blog" className="text-lg font-medium underline">
          How to Build a Blog with React & TailwindCSS
        </Link>
        <p className="text-sm text-gray-400">#React #Tailwind #Blog</p>
      </li>
      <li>
        <Link to="/posts/storage_and_retrieval" className="text-lg font-medium underline">
          Storage and Retrieval - Indexing, LSM Trees vs B-Trees
        </Link>
        <p className="text-sm text-gray-400">#Database #Indexing #Storage</p>
      </li>
    </ul>
  </Page>
);

const About = () => (
  <Page>
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="text-lg leading-relaxed mb-4">
      I'm a skilled software developer: TypeScript, JavaScript, React, Node.js, Next.js, Express.js, Meteor.js, MongoDB, PostgreSQL.
    </p>
    <p className="text-lg leading-relaxed">
      I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. With my knowledge, I enjoy solving technical problems and creating the best experience for users.
    </p>
  </Page>
);

const Contact = () => (
  <Page>
    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
    <p className="mb-4">Feel free to reach out via email or follow me on socials:</p>
    <ul className="space-y-2">
      <li>Email: <a href="minh.nguyenle1809@gmail.com" className="underline">minh.nguyenle1809@gmail.com</a></li>
      <li>GitHub: <a href="https://github.com/MinhNguyenLe/" className="underline">@MinhNguyenLe</a></li>
      <li>Linkedin: <a href="https://www.linkedin.com/in/minhlee2k/" className="underline">@minhlee2k</a></li>
    </ul>
  </Page>
);

const MarkdownRenderer = () => {
  const { theme } = useContext(ThemeContext);
  const proseTheme = theme === 'dark' ? "dark" : "light";  // Updated to match theme names
  const params = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`${proseTheme} max-w-none`}
      dangerouslySetInnerHTML={{
        __html: contents[params.slug]
      }}
    />
  );
};

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:slug" element={<MarkdownRenderer />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
