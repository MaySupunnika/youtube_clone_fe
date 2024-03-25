import React from "react";
import FeedBefore from "../components/feedBeforeHam";
import FeedAfter from "../components/feedAfterHam";
import { useNavbarContext } from "../components/navbarContext";

export default function LandingPage() {
  const { hamburger } = useNavbarContext();
  return <>{hamburger ? <FeedAfter /> : <FeedBefore />}</>;
}
