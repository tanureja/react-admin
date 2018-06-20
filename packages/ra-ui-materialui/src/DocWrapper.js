import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TranslationProvider from '../../ra-core/src/i18n/TranslationProvider';

const DocWrapper = ({ children }) => (
    <Provider store={createStore(() => ({ i18n: { locale: 'en' } }))}>
        <TranslationProvider>{children}</TranslationProvider>
    </Provider>
);

export default DocWrapper;
