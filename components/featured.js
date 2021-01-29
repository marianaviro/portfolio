import React, { useState } from 'react';
import Link from 'next/link';

class Featured extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  cases: [{title: 'CV and personal brand design',
                            date: 'Oct 2020',
                            image:'/mariana.png',
                            link:'/'},
                            {title: 'Periodismo feminista de América Latina',
                            date: 'Nov 2020',
                            image: '/pf.png',
                            link: 'https://periodismofeminista.netlify.app/'}],
                    current: 0 };
  }

  tick() {
    var c = this.state.current + 1;
    if (c < 2) {
      this.setState(state => ({
        current: c
      }));
    } else {
      this.setState(state => ({
        current: 0
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 5000);
    this.setState(state => ({
      current: 0,
      end: true
    }));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.setState(state => ({
      current: 0,
      end: true
    }));
  }

  render() {
    return (
      <div className="font-courier text-xs leading-tight px-8 pb-10 md:pb-foot pt-4 mx-auto">
        <img src={ this.state.cases[this.state.current].image } className="object-contain w-98 h-auto transition duration-100"/>
        <p className="pt-12 pl-8 font-bold">{ this.state.cases[this.state.current].title }</p>
        <p className="pl-8">{ this.state.cases[this.state.current].date }</p>
        <div className="group flex flex-nowrap flex-row hover:text-lilac transition duration-100">
          <a className="font-normal pl-8 pr-2 underline group-hover:font-bold transition duration-100" href={this.state.cases[this.state.current].link} target="_blank">Check it out!</a>
          <img src="/star.png" className="opacity-0 group-hover:opacity-100 object-contain w-4 h-auto transition duration-100"/>
        </div>
      </div>
    )
  }

}

export default Featured;
