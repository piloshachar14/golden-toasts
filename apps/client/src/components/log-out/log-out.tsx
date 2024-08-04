import { useEffect } from 'react';
import { useLoginMutation, useSignUpMutation } from '../../store';

type Props = {
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
};

export const LogOut: React.FC<Props> = ({ option, setOption }) => {
  const [, { reset: resetSignUpData }] = useSignUpMutation({
    fixedCacheKey: 'signupResult',
  });
  const [, { reset: resetSignInData }] = useLoginMutation({
    fixedCacheKey: 'signinResult',
  });

  useEffect(() => {
    if (option === 'התנתק') {
      resetSignUpData();
      resetSignInData();
      setOption('');
    }
  }, [option, setOption, resetSignUpData, resetSignInData]);

  return null;
};
