import { 
    ContainerCount,
    ContainerSafe,
    ImageCount,
    NumberCount,
    ImageGrandpa,
    Containertimer,
    NumberTimer,
    ContainerNumberTimer,
    ContainerSlider

} from './styles'

import { Text } from 'react-native'

import { SliderComponent } from '../../Components/SliderComponent'
import abacate from '../../img/abacate.png'
import Grandpa_Green from '../../img/Grandpa_Green.png'
import { useState } from 'react';


export function Home() {
  const [value, setValue] = useState(0);

  const TotalSeconds = value * 60


  const minutesAmount = Math.floor(TotalSeconds / 60)
  const secondsAmount = TotalSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

    return (
        <ContainerSafe>
            <ContainerCount>
                <ImageCount
                source={abacate}/>
                <NumberCount>8</NumberCount>
            </ContainerCount>
            <Containertimer>
                <ImageGrandpa
                source={Grandpa_Green}
                />
                <ContainerNumberTimer>
                    <NumberTimer>{minutes[0]}</NumberTimer>
                    <NumberTimer>{minutes[1]}</NumberTimer>
                    <NumberTimer>:</NumberTimer>
                    <NumberTimer>{seconds[0]}</NumberTimer>
                    <NumberTimer>{seconds[1]}</NumberTimer>
                </ContainerNumberTimer>
                <ContainerSlider>
                    <SliderComponent
                        value={value}
                        setValue={setValue}
                    />
                </ContainerSlider>
                <Text>{TotalSeconds}aqui</Text>

            </Containertimer>
            
        </ContainerSafe>
    )
}