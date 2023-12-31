import Post from "./components/Post";
import "./global.css";
import Header from "./components/Header";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rockeatseat",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-09-30 23:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/guilhermewall.png",
      name: "Guilherme Wallace",
      role: "CTO @ ValiantGroup",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-09-30 23:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((elem) => {
            return (
              <Post
                key={elem.id}
                author={elem.author}
                content={elem.content}
                publishedAt={elem.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
