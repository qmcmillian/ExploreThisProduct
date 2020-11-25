import React from 'react';
import axios from 'axios'
import Modal from './Modal.jsx'
import Slide from './Slide.jsx'
import Menu from './Menu.jsx'

const container = {
  display: 'flex',
  flexDirection: 'column',
  width: '980px',
  height: '316.63px',
  margin: '0 auto'
}
const divider = {
  borderBottom: '1px solid',
  borderColor: '#eee',
  marginLeft: 0,
  marginRight: 0
}

const main = {
  width: 'fit-content',
  height: '83%'
}

const etp_header = {
  textAlign: 'center',
  fontSize: '24px',
  lineHeight: 1,
  fontFamily: 'georgia, times, serif',
  marginBottom: '24px',
  height: '8%'
}

const carousel = {
  display: 'flex',
  overflowX: 'scroll',
  scrollBehavior: 'smooth',
  scrollSnapType: 'x mandatory',
  height: '185px',
  width: '898px',
  filter: 'drop-shadow(0 0 10px #0003)',
  perspective: '100px'
}

const carousel_box = {
  display: 'flex'
}

const direction = {
  width: '32px',
  border: 'transparent',
  backgroundColor: 'transparent'
}

const carousel_slide = {
  display: 'flex',
  position: 'relative',
  width: '100%'
}

const carousel_nav = {
  textAlign: 'center'
}

const nav_item = {
  display: 'inline-block'
}

const nav_button = {
  display: 'inline-block',
  width: '.5rem',
  height: '.5rem',
  backgroundColor: '#ccc',
  backgroundClip: 'content-box',
  border: '0.25rem solid transparent',
  borderRadius: '50%',
  fontSize: 0,
  transition: 'transform 0.1s'
}


class ExploreThisProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      memberId: 0,
      imageUrl: '',
      items: [],
      currentMember: [{}],
      products: [{}]
    }
    this.imageClick = this.imageClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getMember = this.getMember.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  showModal() {
    this.setState({show:true})
  }

  closeModal() {
    this.setState({show:false})
  }

  imageClick(id, url, itemsUsed) {
    this.showModal()
    this.setState({
      memberId: id,
      imageUrl: url,
      items: []
    })
  }

  getMember() {
    axios.get('http://127.0.0.1:2754/api/etp/member', {
      params: {
        memberId: this.state.memberId
      }
    })
    .then((response)=> {
      console.log(response.data)
        this.setState({currentMember: response.data})
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  getProducts(items) {
    axios.get('http://127.0.0.1:2754/api/etp/products', {
      params: {
        products: items
      }
    })
    .then((response)=> {
      console.log(response.data)
      this.setState({products: response.data})
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  render() {
    return(
    <div style={container}>
      < Modal show={this.state.show} closeModal={this.closeModal}  imageUrl={this.state.imageUrl} currentMember={this.state.currentMember} products={this.state.products}/>
      <div style={divider}></div>
      <div style={main}>
        <div style={etp_header}>Explore This Product</div>

      <div className="menu_carousel_box_wrapper">
        < Menu />
        <div className="carousel_nav_wrapper">
            <div style={carousel_box}>
              <button style={direction}>
                <svg viewBox="0 0 16 32"><path d="M2.2 16.052l13.5-14.33c.1-.098.3-.397.3-.695 0-.498-.4-.995-.9-.995-.3 0-.5.2-.6.298L.4 15.256c-.2.298-.4.497-.4.796 0 .298.1.398.2.497l.1.1L14.5 31.67c.1.1.3.3.6.3.5 0 .9-.5.9-.996 0-.3-.2-.498-.3-.697L2.2 16.05z"></path></svg>
              </button>
              <div style={carousel}>
                <div style={carousel_slide} id="set1">
                {this.props.images.map((item, i)=> {
                  if (i > 0 && i <= 5) {
                    return <Slide image={item} imageClick={this.imageClick}  memberId={this.state.memberId} imageUrl={this.state.imageUrl} items={this.state.items} getMember={this.getMember} getProducts={this.getProducts}/>
                  }})}
                </div>
                <div style={carousel_slide} id="set2">
                {this.props.images.map((item, i)=> {
                  if (i >= 5 && i <= 10) {
                    return <Slide image={item} imageClick={this.imageClick}  memberId={this.state.memberId} imageUrl={this.state.imageUrl} items={this.state.items} getMember={this.getMember} getProducts={this.getProducts}/>
                  }})}
                </div>
              </div>
              <button style={direction}>
                <svg viewBox="0 0 16 32"><path d="M13.8 15.952L.3 30.28c-.1.1-.3.398-.3.697 0 .497.4.995.9.995.3 0 .5-.2.6-.3L15.6 16.75c.2-.298.4-.497.4-.796 0-.298-.1-.398-.2-.497l-.1-.1L1.5.33C1.4.23 1.2.032.9.032c-.5 0-.9.497-.9.995 0 .298.2.497.3.696l13.5 14.23z"></path></svg>
              </button>
            </div>

            <div style={carousel_nav}>
              <div style={nav_item}>
                <a href="#set1" style={nav_button}>Go to slide 1</a>
              </div>
              <div style={nav_item}>
                <a href="#set2"style={nav_button}>Go to slide 2</a>
              </div>
            </div>
        </div>
      </div>

      </div>
    </div>
    )
  }
}

export default ExploreThisProduct;

