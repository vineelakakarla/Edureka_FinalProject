import React, { Component } from 'react';
import './RestImg.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';

const customStyles = {
    content: {

       
        
    }
};


class RestImg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false
        };
    }

    openModal = () => {
        this.setState({ modalOpen: true })
    }

    closeModal = () => {
        this.setState({ modalOpen: false })
    }
    renderCarousel = () => {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true
        };
        return (
            <React.Fragment>
                <Slider {...settings}>
                    <div >
                        <img class="img-responsive car-img" src="/images/food1.jpg" alt="First slide" />
                    </div>
                    <div>
                        <img class="img-responsive car-img" src="/images/food2.jpg" alt="Second slide" />
                    </div>
                    <div>
                        <img class="img-responsive car-img " src="/images/food3.jpg" alt="Third slide" />
                    </div>
                    <div>
                        <img class="img-responsive car-img " src="/images/food4.jpg" alt="Foyrth slide" />
                    </div>
                </Slider>

            </React.Fragment>
        )
    }

    render() {
        let divImg;
        if (this.props.restData == "")
            divImg = {};
        else {

            divImg = {
                backgroundImage: `url('${this.props.restData[0].thumb}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            };
        }

        return (
            <React.Fragment>
                <div className="container mainContainer">
                    <div className="row">
                        <div className="col-lg-12 col-12" style={divImg} >
                            <div className="gallery">
                                <button className="btn btn-light img_btn" onClick={this.openModal}>Click to see Image Gallery</button>
                                <Modal isOpen={this.state.modalOpen}
                                    onRequestClose={this.closeModal}
                                    style={customStyles}
                                    className = "modalImage"
                                >
                                    {this.renderCarousel()}
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default RestImg;