import React, { useState, useEffect } from 'react';

import { ContainerCount,
         ContainerSafe,
         ImageCount,
         NumberCount,
         ImageGrandpa,
         Containertimer,
         NumberTimer,
         ContainerNumberTimer,
         ContainerSlider,
         ContainerStart,
         ImageStart_Stop,
         Button,
         ContainerHome,
        } from './styles';

import { SliderComponent } from '../../Components/SliderComponent';
import { UponAvocado } from '../../Components/UponAvocado';
import { Fold } from '../../Components/Fold';
import { ShopGrandpa } from '../../Components/ShopGrandpa';

import BTN_PLAY from '../../img/BTN_PLAY.png'
import BTN_STOP from '../../img/BTN_STOP.png'
import abacate from '../../img/abacate.png';
import Grandpa_Green from '../../img/Grandpa_Green.png';
import Grandpa_Pink from '../../img/Grandpa_Pink.png'
import Grandpa_Purple from '../../img/Grandpa_Purple.png'


export function Home() {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [uponButton, setUponButton] = useState(false);
  const [FoldButton, setFoldButton] = useState(false);
  const [shopGrandpa, setShopGrandpa] = useState(false);
  const [ValueAvocado, setValueAvocado] = useState(3)
  const [GrandpaImage, SetGrandpaImage] = useState('Green')

  useEffect(() => {
    let intervalId : number | NodeJS.Timeout;
    if (isActive && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    }
    if (isActive && seconds === 0) {
      setValueAvocado(ValueAvocado + 1)
      setIsActive(false);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, seconds]);

  function SelectedGrandpa() {
    if(GrandpaImage === 'Green'){
      return Grandpa_Green
    }
    if(GrandpaImage === 'Pink'){
      return Grandpa_Pink
    }
    if(GrandpaImage === 'Purple'){
      return Grandpa_Purple
    }
    
  }

  function handleStartTimer() {
    setIsActive(!isActive);
    setSeconds(value*60)
  };

  function HandleStopTimer() {
    setSeconds(0);
    setIsActive(false);
    setValueAvocado(ValueAvocado - 1)
  };

  const formatTime = (timeInSeconds : number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <ContainerSafe>
      <ContainerHome>
        <ContainerCount>
          <Button 
          onPress={() => setUponButton(true)}
          >
            <ImageCount source={abacate} />
          </Button>
          <NumberCount>{ValueAvocado}</NumberCount>
        </ContainerCount>
        <Containertimer>
          <Button onPress={() => setShopGrandpa(true)}>
            <ImageGrandpa source={SelectedGrandpa()} />
          </Button>
          <ContainerNumberTimer>
            <NumberTimer>{isActive ? formatTime(seconds) : formatTime(value * 60)}</NumberTimer>
          </ContainerNumberTimer>
          {!isActive? 
          ( <ContainerSlider>
                <ContainerStart>
                  <SliderComponent
                  value={value}
                  setValue={setValue}
                  />
                  <Button onPress={handleStartTimer}>
                    <ImageStart_Stop source={BTN_PLAY}/>
                  </Button>
                </ContainerStart>
            </ContainerSlider>
          ):( <ContainerSlider>
                <Button onPress={() => setFoldButton(true)}>
                  <ImageStart_Stop source={BTN_STOP}/>
                </Button>
              </ContainerSlider>
          )
          }
        </Containertimer>
      </ContainerHome>
      <UponAvocado 
      HandleUponButton={uponButton}
      HandlesetUponButton={setUponButton}
      />
      <Fold
      HandleFoldButton={FoldButton}
      HandlesetFoldButton={setFoldButton}
      FunctionHandleStopTimer={HandleStopTimer}
      />
      <ShopGrandpa
      SetGrandpaImage={SetGrandpaImage}
      shopGrandpa={shopGrandpa}
      HandlesetShopGrandpa={setShopGrandpa}
      />
    </ContainerSafe >
  );
};
