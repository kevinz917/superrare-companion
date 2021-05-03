import React from "react";
import { WebView } from "react-native-webview";
import { connect } from "react-redux";
import { selectedPostSelector } from "../redux/activitySelectors";

interface ContractDetailsMapStateToProps {
  selectedPost: any;
}

const ContractDetailsMapStateToProps = (
  state: any
): ContractDetailsMapStateToProps => {
  return {
    selectedPost: selectedPostSelector(state),
  };
};

const ContractDetails = (props: ContractDetailsMapStateToProps) => {
  const { selectedPost } = props;

  return (
    <WebView
      source={{
        uri: `https://etherscan.io/address/${selectedPost.artwork.contractAddress}`,
      }}
    />
  );
};

export default connect(ContractDetailsMapStateToProps, null)(ContractDetails);
