const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

server.get('/projects', (req, res) => {
  return res.json(projects);
})

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(projects);
});

server.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { tasks } = req.body;

  projects[id].tasks.push(tasks);

  return res.json(projects);
});

server.put('/projects/:id', (req, res) => {
  const { title } = req.body;
  const { id } = req.params;

  projects[id].title = title

  return res.json(projects);
});

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  projects.splice(id, 1)

  return res.json(projects);
})

server.listen(3000);