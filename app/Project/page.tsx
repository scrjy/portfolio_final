import React from 'react'

const Project = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">★ Project List ★</h2>
      <br />
      <ul className="mt-4">
        <li className="mb-4">
          <p className="text-xl font-semibold">Github</p>
          <p className="mt-2">
            <a
              href="https://github.com/scrjy?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              github repositories
            </a>
          </p>
        </li>
        <br />
        <li className="mb-4">
          <p className="text-xl font-semibold">Vercel</p>
          <p className="mt-2">
            <a
              href="https://vercel.com/scrjys-projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel repositories
            </a>
          </p>
        </li>
        <br />
        <br />
        <li className="mb-4">
          <p className="text-xl font-semibold">MongoDB</p>
          <p className="mt-2">
            <a
              href="https://cloud.mongodb.com/v2/66dfbc64bb9dfa5e4fc48177#/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              mongodb database
            </a>
          </p>
        </li>
      </ul>

      <br />
    </div>
  )
}

export default Project
