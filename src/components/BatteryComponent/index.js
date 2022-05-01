import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import chargeIcon from '../../assets/charge.png'

export const BatteryComponent = () => {
  const [batteryState, setBatteryState] = useState({})
  const [isCharging, setIsCharging] = useState(false)

  const onBatteryStateChangeHandler = (e) => {
    setBatteryState(e.currentTarget);
    setIsCharging(e.currentTarget.charging);
  }

  useEffect(() => {
    (async () => {
      const battery = await navigator.getBattery()
      battery.onchargingchange = onBatteryStateChangeHandler
      battery.onlevelchange = onBatteryStateChangeHandler
      setBatteryState(battery)
    })()
  }, [])
  useEffect(() => {
    console.log('test')
  }, [batteryState])
  return (
    <BatteryWrapper>
      {isCharging && <ChargeIcon src={chargeIcon} />}
      <BatteryFiller level={batteryState.level} />
    </BatteryWrapper>
  )
}

const BatteryWrapper = styled.div`
  width: 30px;
  height: 15px;
  border: 1px solid #000;
  border-radius: 5px;
  position: relative;
  margin-left: 20px;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 3px;
    height: 7px;
    background-color: #000;
    right: -3px;
    top: 4px;
    border-radius: 30px;
  }
`

const ChargeIcon = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  left: 9px;
  top: -1px;
`

const BatteryFiller = styled.div`
  height: 100%;
  width: ${(props) => `${props.level * 100}%`};
  background-color: green;
`
