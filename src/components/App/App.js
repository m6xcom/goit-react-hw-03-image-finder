import React, { Component } from "react";
import getFetch from "../../services/pixabayApi";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Spinner from "../Loader/Loader";
import Modal from "../Modal/Modal";
import "./App.css";

class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false,
    loadMoreButt: false,
    openedModal: false,
    modalImage: {},
  };
  handleSubmit = (query) => {
    if (query) {
      this.setState({
        query: query,
        page: 1,
        isLoading: true,
      });
    }
  };
  openModal = (img) => {
    this.setState({
      modalImage: img,
      openedModal: true,
    });
  };
  closeModal = () => {
    this.setState({
      modalImage: {},
      openedModal: false,
    });
  };
  loadMore = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1, isLoading: true };
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      getFetch(this.state.query, this.state.page).then((photos) => {
        if (photos.length !== 0) {
          this.setState({
            images: [...photos],
            isLoading: false,
            loadMoreButt: photos.length === 12 ? true : false,
          });
        }
      });
    } else if (this.state.page !== prevState.page) {
      getFetch(this.state.query, this.state.page).then((photos) => {
        if (photos.length !== 0) {
          this.setState({
            images: [...prevState.images, ...photos],
            isLoading: false,
            loadMoreButt: photos.length === 12 ? true : false,
          });
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      });
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.openedModal && (
          <Modal closeModal={this.closeModal} img={this.state.modalImage} />
        )}
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.images.length ? (
          <>
            <ImageGallery
              photos={this.state.images}
              openModal={this.openModal}
            />
            {this.state.loadMoreButt && <Button loadMore={this.loadMore} />}
          </>
        ) : (
          <h1>Please enter a query!</h1>
        )}
        {this.state.isLoading && <Spinner />}
      </div>
    );
  }
}

export default App;
