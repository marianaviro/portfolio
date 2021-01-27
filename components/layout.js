import React, { useState } from 'react';
import Featured from '../components/featured';
import Link from 'next/link';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  animation: 'dont-show-bg',
                    end: false };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  tick() {
    if (!this.state.end) {
      if (this.state.animation === 'show-bg-1') {
        console.log('Está 1, Show 2');
        this.setState(state => ({
          animation: 'show-bg-2'
        }));
      } else {
        console.log('Está 2, Show 1');
        this.setState(state => ({
          animation: 'show-bg-1'
        }));
      }
    } else {
      this.setState(state => ({
        animation: 'dont-show-bg'
      }));
    }
  }

  start() {
    this.setState(state => ({
      animation: 'show-bg-1',
      end: false
    }));
  }

  stop() {
    this.setState(state => ({
      animation: 'dont-show-bg',
      end: true
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.setState(state => ({
      animation: 'dont-show-bg',
      end: true
    }));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.setState(state => ({
      animation: 'dont-show-bg',
      end: true
    }));
  }

  render() {
    const { children } = this.props;
    return (
      <div className="container relative">
        <div className={ this.state.animation + " fixed container py-full min-w-full min-h-full t-0 l-0 -z-10"}>
          <div className="w-full fixed top-0 z-50 flex flex-nowrap flex-row justify-end font-courier text-black text-sm italic py-4">
            <div className="px-4 group flex flex-nowrap flex-row border-1 border-solid border-lilac border-opacity-100 hover:border-opacity-100 hover:text-lilac transition duration-100">
              <Link href="/" className="flex flex-nowrap flex-row">
                  <a onMouseEnter={this.start} onMouseLeave={this.stop} className="font-normal pr-3 group-hover:font-bold transition duration-100">About me</a>
              </Link>
              <img src="/star.png" className="opacity-0 group-hover:opacity-100 object-contain w-4 h-auto transition duration-100"/>
            </div>
            <div className="px-4 group flex flex-nowrap flex-row hover:text-lilac transition duration-100">
              <Link href="/projects" className="flex flex-nowrap flex-row">
                  <a onMouseEnter={this.start} onMouseLeave={this.stop} className="font-normal pr-3 group-hover:font-bold transition duration-100">Projects</a>
              </Link>
              <img src="/star.png" className="opacity-0 group-hover:opacity-100 object-contain w-4 h-auto transition duration-100"/>
            </div>
            <div className="px-4 group flex flex-nowrap flex-row hover:text-lilac transition duration-100">
              <Link href="/cv" className="flex flex-nowrap flex-row">
                  <a onMouseEnter={this.start} onMouseLeave={this.stop} className="font-normal pr-3 group-hover:font-bold transition duration-100">CV</a>
              </Link>
              <img src="/star.png" className="opacity-0 group-hover:opacity-100 object-contain w-4 h-auto transition duration-100"/>
            </div>
            <div className="pl-4 pr-2 group flex flex-nowrap flex-row hover:text-lilac transition duration-100">
              <a href="https://www.behance.net/marianaviro" onMouseEnter={this.start} onMouseLeave={this.stop} className="flex flex-nowrap flex-row">
                  <img src="/behance.svg" alt="Go to Behance profile" className="object-contain w-5 h-auto"/>
              </a>
            </div>
            <div className="pl-2 pr-4 group flex flex-nowrap flex-row hover:text-lilac hover:cursor-pointer transition duration-100">
              <a href="https://www.linkedin.com/in/marianavillamizar/" onMouseEnter={this.start} onMouseLeave={this.stop} className="flex flex-nowrap flex-row" target="_blank">
                  <img src="/linkedin.svg" alt="Go to LinkedIn profile" className="object-contain w-5 h-auto"/>
              </a>
            </div>
          </div>
          <div className="fixed top-0 w-full h-full overflow-hidden flex flex-wrap font-courier text-black text-sm">
            <div className="fixed t-0 b-0 l-0 w-1/2 h-full overflow-hidden self-stretch py-2 px-2">
              <Featured/>
            </div>
            {children.map(child => <div>{child}</div>)}
          </div>
          <div className="w-full fixed bottom-0 flex flex-wrap flex-row text-left justify-start font-courier text-lilac text-xs italic py-4">
            <p onMouseEnter={this.start} onMouseLeave={this.stop} className="px-4">Mariana Villamizar</p>
            <img src="/star.png" className="px-4 opacity-100 object-contain w-10 h-auto"/>
            <p onMouseEnter={this.start} onMouseLeave={this.stop} className="px-4">Designer and Computer engineer</p>
            <img src="/star.png" className="px-4 opacity-100 object-contain w-10 h-auto"/>
            <p onMouseEnter={this.start} onMouseLeave={this.stop} className="px-4">marianaviro93@gmail.com</p>
            <img src="/star.png" className="px-4 opacity-100 object-contain w-10 h-auto"/>
            <p onMouseEnter={this.start} onMouseLeave={this.stop} className="px-4">Bogotá, Colombia</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
