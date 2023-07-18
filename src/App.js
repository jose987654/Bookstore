import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateUser from "./Components/CreateUser";
import Login from "./Components/Login";
import AuthorizedEndpoint from "./Components/Authorized";
import RetrieveUser from "./Components/RetrieveUser";
import RetrieveAllBooks from "./Components/GetAllBooks";
import CreateBookList from "./Components/CreateBooks";
import UpdateBookDetails from "./Components/UpdateBook";
import DeleteAllUserBooks from "./Components/DeleteAllBooks";
import DeleteSingleUserBook from "./Components/DeleteBook";
import DeleteCreatedUser from "./Components/DeleteUser";
import RetrieveSingleBook from "./Components/GetSingleBook";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/RetrieveUser"
            element={
              <AuthorizedEndpoint>
                <RetrieveUser />{" "}
              </AuthorizedEndpoint>
            }
          />
          <Route
            path="/RetrieveAllBooks"
            element={
              <AuthorizedEndpoint>
                <RetrieveAllBooks />{" "}
              </AuthorizedEndpoint>
            }
          />
          <Route
            path="/RetrieveSingleBook"
            element={
              <AuthorizedEndpoint>
                <RetrieveSingleBook />{" "}
              </AuthorizedEndpoint>
            }
          />
          <Route
            path="/CreateBookList"
            element={
              <AuthorizedEndpoint>
                <CreateBookList />{" "}
              </AuthorizedEndpoint>
            }
          />
          <Route
            path="/UpdateBookDetails"
            element={
              <AuthorizedEndpoint>
                <UpdateBookDetails />{" "}
              </AuthorizedEndpoint>
            }
          />
          <Route
            path="/DeleteAllUserBooks"
            element={
              <AuthorizedEndpoint>
                <DeleteAllUserBooks />{" "}
              </AuthorizedEndpoint>
            }
          />
          <Route
            path="/DeleteSingleUserBook"
            element={
              <AuthorizedEndpoint>
                <DeleteSingleUserBook />{" "}
              </AuthorizedEndpoint>
            }
          />
          <Route
            path="/DeleteCreatedUser"
            element={
              <AuthorizedEndpoint>
                <DeleteCreatedUser />{" "}
              </AuthorizedEndpoint>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
