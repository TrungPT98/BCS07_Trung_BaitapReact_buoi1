import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div>
                <div className='bg-light my-3'>
                    <div className='p-5'>
                        <h1 className='fw-light' style={{fontSize: '60px'}}>
                            A warm welcome!
                        </h1>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sit iure corporis, pariatur nemo atque porro hic. Numquam rem quod deserunt a, ab sequi dignissimos vero porro nulla. Nam, ipsum.
                        </p>
                        <button className='btn btn-primary fs-5 p-2'>
                            Call to action
                        </button></div>
                </div>
            </div>
        )
    }
}
