import {
  createContext, useContext, useReducer, useMemo,
} from 'react';
import PropTypes from 'prop-types';

export const HeaderTitleContext = createContext({});

const init = (initialCount) => initialCount

const setTitleReducer = (state, action) => {
  console.log({ state, action })
  switch (action.type) {
    case 'set': {
      return action.title
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const TitleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(setTitleReducer, 'Hello World!', init)
  const value = useMemo(() => ({
    state, dispatch,
  }), [state, dispatch])
  return <HeaderTitleContext.Provider value={value}>{children}</HeaderTitleContext.Provider>
}

TitleProvider.propTypes = {
  children: PropTypes.element,
}

export const useTitle = () => {
  const context = useContext(HeaderTitleContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export const HeaderTitle = () => {
  const title = useContext(HeaderTitleContext);
  return (
    <p>
      {title}
    </p>
  )
}
