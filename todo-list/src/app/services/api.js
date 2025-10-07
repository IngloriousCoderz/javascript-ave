const BASE_URL = 'http://localhost:3000/tasks'

export async function fetchTasks() {
  const response = await fetch(BASE_URL)
  const data = await response.json()
  return data

  // return fetch(BASE_URL).then((response) => response.json())
}

export async function createTask(title) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  })
  const data = await response.json()
  return data
}

export async function updateTask(id, patch) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patch),
  })
  const data = await response.json()
  return data
}

export async function removeTask(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  })
  const data = await response.json()
  return data
}
