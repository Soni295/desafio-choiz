import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListOfPrices } from '../reducers/listOfpricesSlice';
import { fetchFrequentQuestions } from '../reducers/frequentQuestionsSlice';

export const useFetchAll = () => {
  const dispatch = useDispatch()
  const all = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchListOfPrices())
    dispatch(fetchFrequentQuestions())
  }, [dispatch])

  return all
}
