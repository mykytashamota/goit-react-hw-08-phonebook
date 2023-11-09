import { Field } from 'formik';
import styled from 'styled-components';

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const LabelEl = styled.label`
  font-size: 15px;
  margin-bottom: 5px;
`;

export const InputEl = styled(Field)`
  height: 40px;
  padding-right: 12px;
  padding-left: 12px;
  background-color: rgba(127, 86, 217, 0.04);
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid #d8d8d8;
  font-size: 14px;
  line-height: 1.75;

  &:focus {
    outline: 1px solid #7f56d9;
  }
`;

export const FormWrapper = styled.div`
  margin-bottom: 120px;
`;
