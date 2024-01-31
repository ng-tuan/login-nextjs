'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { tns } from 'tiny-slider';
export default function Slider() {
  useEffect(() => {
    // Use a valid selector for the container
    const slider = tns({
      container: '#mouse-drag2', // Provide the ID or class of your container
      items: 1,
      slideBy: 'page',
      mouseDrag: true,
      controls: false,
      swipeAngle: false,
      speed: 400,
      nav: false ,
      
    });

    // Cleanup the slider on component unmount
    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div id="mouse-drag2_wrapper" className="flex justify-center w-full">
      <div className="container w-full">
        <div className="mx-auto w-full">
          <div className="slider w-full" id="mouse-drag2-ow">
            <div id="mouse-drag2-mw" className="tns-ovh">
              <div className="tns-inner w-full" id="mouse-drag2-iw">
                <div
                  className="mouse-drag2 tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                  id="mouse-drag2"
                >
                  {/* Slide 1 */}
                  <div
                    className="item tns-item"
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div className="img img-4">
                      <Image
                        src="/slider/slider3.jpg"
                        alt="slider"
                        width={1550}
                        height={500}
                        layout="responsive"
                      />
                    </div>
                
                  </div>
                  {/* Slide 2 */}
                  <div
                    className="item tns-item"
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div className="img img-5">
                      <Image
                        src="/slider/slider5.jpg"
                        alt="slider"
                        width={1550}
                        height={500}
                        layout="responsive"
                      />
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
