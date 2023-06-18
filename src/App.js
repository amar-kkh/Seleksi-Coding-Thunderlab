import React from "react";
import "./App.css";
import { Button, Card, Col, Form, Row, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"

    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }} className="col-8">{todo.text}</span>
      <div className="">
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-4">
        <Col xs={12}
          lg={12}
          sm={12}
          md={12}>
          <FloatingLabel
            controlId="floatingInput"
            label="Add New Todo"
            className="mb-2"
          >
            <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
          </FloatingLabel>
        </Col>
        <Col xs={12}
          lg={12}
          sm={12}
          md={12} className="d-grid">
          <Button variant="primary" type="submit" size="lg">
            Add this todo
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Your Todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="inner-content">
        <div className="container">
          <div className="mb-4">
            <h2>Your Todo</h2>
            <span>Here are your todo list. You can add new todo, make it done and remove the selected todo</span>
          </div>

          <FormTodo addTodo={addTodo} />
          <div>
            <h6>Todo List</h6>
            {todos.map((todo, index) => (
              <Card className="mb-2" >
                <Card.Body>
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    markTodo={markTodo}
                    removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;