// src/components/SkeletonElement.tsx
import React from 'react';
import styled from 'styled-components';

const SkeletonContainer = styled.div`
  background-color: #f0f0f0; /* Background color for the skeleton */
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

const SkeletonRow = styled.div`
  height: 20px; /* Height of each skeleton row */
  width: 100%; /* Full width */
  margin-bottom: 8px; /* Spacing between rows */
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); /* Shimmer effect */
  background-size: 200% 100%; /* Animation size */
  animation: loading 1.5s infinite; /* Animation with an infinite loop */
`;

const SkeletonElement: React.FC = () => {
  return (
    <SkeletonContainer>
      <SkeletonRow></SkeletonRow>
      <SkeletonRow></SkeletonRow>
      <SkeletonRow></SkeletonRow>
    </SkeletonContainer>
  );
};

export default SkeletonElement;
