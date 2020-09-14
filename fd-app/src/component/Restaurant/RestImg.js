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
                        <img class="img-responsive car-img" src="https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg" alt="First slide" />
                    </div>
                    <div>
                        <img class="img-responsive car-img" src="https://b.zmtcdn.com/data/pictures/7/18690357/0df7f4ca0c645a68a1657b1e69b015fa.jpg" alt="Second slide" />
                    </div>
                    <div>
                        <img class="img-responsive car-img " src="https://b.zmtcdn.com/data/res_imagery/6508401_RESTAURANT_21a925c42f2f93c9709e1945b9eae56f.jpg" alt="Third slide" />
                    </div>
                    <div>
                        <img class="img-responsive car-img " src="https://b.zmtcdn.com/data/pictures/1/50471/bcf68da39dcfb0fe5bcfb742c337385e.jpg" alt="Forth slide" />
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