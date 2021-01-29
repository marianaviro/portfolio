import React, { useState } from 'react';
import Featured from '../components/featured';
import Link from 'next/link';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  animation: 'dont-show-bg',
                    end: true };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  tick() {
    if (!this.state.end) {
      if (this.state.animation === 'show-bg-1') {
        console.log('Está 1, Show 2');
        this.setState(state => ({
          animation: 'show-bg-2',
          end: false
        }));
      } else {
        console.log('Está 2, Show 1');
        this.setState(state => ({
          animation: 'show-bg-1',
          end: false
        }));
      }
    } else {
      this.setState(state => ({
        animation: 'dont-show-bg',
        end: true
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
      <div className="  ">
        <div className={ this.state.animation + " md:max-h-screen bg-cover md:bg-contain"}>

          <div className="fixed top-0 w-full z-50 flex flex-nowrap flex-row justify-end font-courier text-black text-sm italic py-4">
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
              <a href="https://www.behance.net/marianaviro" target="_blank" onMouseEnter={this.start} onMouseLeave={this.stop} className="flex flex-nowrap flex-row">
                  <img src="/behance.svg" alt="Go to Behance profile" className="object-contain w-5 h-auto"/>
              </a>
            </div>
            <div className="pl-2 pr-4 group flex flex-nowrap flex-row hover:text-lilac hover:cursor-pointer transition duration-100">
              <a href="https://www.linkedin.com/in/marianavillamizar/" target="_blank" onMouseEnter={this.start} onMouseLeave={this.stop} className="flex flex-nowrap flex-row" target="_blank">
                  <img src="/linkedin.svg" alt="Go to LinkedIn profile" className="object-contain w-5 h-auto"/>
              </a>
            </div>
          </div>

          <div className="w-full px-6 sm:px-0 sm:w-2/3 md:w-full md:max-h-screen flex flex-wrap-reverse font-courier text-black text-sm my-0 mx-auto">
            <div className="flex main-content md:max-h-screen md:w-1/2 w-full min-w-500 px-8 pb-20 md:pb-0">
              <Featured/>
            </div>
            {children.map((child, i) => <div className="main-content overflow-y-auto md:w-1/2 w-full md:max-h-screen min-w-500">{child}</div>)}
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
