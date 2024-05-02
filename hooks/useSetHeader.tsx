import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from 'react';

export const useSetHeader = ({
  initialTitle,
  initialBackTitle,
}: {
  initialTitle?: string;
  initialBackTitle?: string;
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [titleBack, setTitleBack] = useState(initialBackTitle);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerBackTitle: titleBack,
    });
  }, [navigation, title, titleBack]);

  return {
    setTitle,
    setTitleBack,
  };
};
