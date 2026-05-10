import { useState, useEffect } from 'react'

const PINNED_QUERY = `{
  user(login: "Enesyldrm00") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          forkCount
          primaryLanguage { name color }
        }
      }
    }
  }
}`

async function fetchPinned(token) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: PINNED_QUERY }),
  })
  const json = await res.json()
  if (json.errors) throw new Error(json.errors[0].message)
  return json.data.user.pinnedItems.nodes
}

async function fetchFallback() {
  const res = await fetch(
    'https://api.github.com/users/Enesyldrm00/repos?sort=updated&per_page=20'
  )
  if (!res.ok) throw new Error(`GitHub API ${res.status}`)
  const data = await res.json()
  return data
    .filter(r => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
    .map(r => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      stargazerCount: r.stargazers_count,
      forkCount: r.forks_count,
      primaryLanguage: r.language ? { name: r.language, color: null } : null,
    }))
}

export function useGitHub() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const token = import.meta.env.VITE_GITHUB_TOKEN
    const fetcher = token ? fetchPinned(token) : fetchFallback()

    fetcher
      .then(data => { setRepos(data); setLoading(false) })
      .catch(err => {
        fetchFallback()
          .then(data => { setRepos(data); setLoading(false) })
          .catch(() => { setError(err.message); setLoading(false) })
      })
  }, [])

  return { repos, loading, error }
}
