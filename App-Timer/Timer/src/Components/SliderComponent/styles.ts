import styled from "styled-components/native";
import Slider from "@react-native-community/slider";

export const Container = styled.View `
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    padding: 20px;
`

export const TrackContainer = styled.View`
  width: 100%;
  height: 16px;
  background-color: transparent;
`

export const ContainerSliderTrack = styled.View `
  width: 100%;
  border-width: 4px;
  border-color: ${({theme})=> theme.COLORS.GREEN_300};
  border-radius: 50px;
`

export const ContainerTrack = styled.View `
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  background-color: ${({theme})=> theme.COLORS.GREEN_400};
  border-radius: 50px;
`
export const TextContainer = styled.Text `
 margin-top: 10px;
`

export const SliderComponente = styled(Slider)`
  position: absolute;
  top: -10px;
  left: 0px;
  width: 100%;
  height: 40px;
`