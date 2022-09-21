import { useCallback } from 'react';

import { useAppContext } from '@magento/peregrine/lib/context/app';
import { useDropdown } from '@magento/peregrine/lib/hooks/useDropdown';
import {gql, useQuery} from "@apollo/client";

const GET_STORE_LOGO_CONFIG_DATA = gql`
    query getStoreLogoConfigData {
        storeConfig {
            header_logo_src
            id
            logo_alt
            logo_height
            logo_width
            store_code
        }
    }
`;

export const useHeader = () => {
    const [{ hasBeenOffline, isOnline, isPageLoading }] = useAppContext();
    const {
        elementRef: searchRef,
        expanded: isSearchOpen,
        setExpanded: setIsSearchOpen,
        triggerRef: searchTriggerRef
    } = useDropdown();

    const { data, error, loading} = useQuery(GET_STORE_LOGO_CONFIG_DATA, {
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first"
    });

    const logoConfig = data ? ({
            header_logo_src: data.storeConfig.header_logo_src,
            id: data.storeConfig.id,
            logo_alt: data.storeConfig.logo_alt,
            logo_height: data.storeConfig.logo_height,
            logo_width: data.storeConfig.logo_width,
            store_code: data.storeConfig.store_code,
        })
        : null;


    const handleSearchTriggerClick = useCallback(() => {
        // Toggle the Search input form.
        setIsSearchOpen(isOpen => !isOpen);
    }, [setIsSearchOpen]);

    return {
        handleSearchTriggerClick,
        hasBeenOffline,
        isOnline,
        isPageLoading,
        isSearchOpen,
        searchRef,
        searchTriggerRef,
        logoConfig,
        error,
        loading
    };
};
