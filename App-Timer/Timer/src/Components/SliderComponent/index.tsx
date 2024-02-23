import React, { useState } from 'react';

import abacate from '../../img/abacate.png'

import {
  Container,
  TrackContainer,
  ContainerSliderTrack,
  ContainerTrack,
  SliderComponente
} from './styles'

interface SliderCount {
  value: number
  setValue: (newValue: number) => void;
}

export function SliderComponent(props : SliderCount) {

  return (
    <Container>
      <ContainerSliderTrack>
        <TrackContainer>
          <ContainerTrack style={ { width: `${(props.value / 60) * 100}%` }} />
          <SliderComponente
            minimumValue={0}
            maximumValue={60}
            step={5}
            minimumTrackTintColor="transparent"
            maximumTrackTintColor="transparent"
            thumbImage={abacate}
            value={props.value}
            onValueChange={(newValue) => props.setValue(newValue)}
          />
        </TrackContainer>
      </ContainerSliderTrack>
    </Container>
  );
}

