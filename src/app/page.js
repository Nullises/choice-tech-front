"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Banner from "../Components/Banner";
import DropdownSelector from "../Components/DropdownSelector";
import DataTable from "../Components/DataTable";
import HTTPService from "../Services/HTTPService";

const Home = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await HTTPService.getAll();
      setFiles(response.data.files);
    };
    fetchFiles();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // Initial data
      const response = await HTTPService.getByFileName("test9.csv");
      setData(response.data);
      setSelectedFile("test9.csv");
    };
    fetchData();
  }, []);

  const handleFileSelect = async (file) => {
    const response = await HTTPService.getByFileName(file);
    setData(response.data);
    setSelectedFile(file);
  };

  console.log("data", data);

  return (
    <div>
      <Head>
        <title>React Test App</title>
        <link
          rel="stylesheet"
          href="<https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css>"
        />
      </Head>
      <div>
        <Banner />
      </div>
      <Container>
        <Row>
          <Col>
            <DropdownSelector options={files} onSelect={handleFileSelect} />
          </Col>
        </Row>
        {selectedFile && (
          <Row>
            <Col>
              <DataTable file={data.file} lines={data.lines} />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Home;
