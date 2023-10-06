// src/components/SkeletonElement.tsx
import React from 'react';
import styled from 'styled-components';

const SkeletonContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 5px;
  min-width: 300px;
  min-heigth: 34.5px;
`;

export const SkeletonRow = styled.div`
  height: 20px;
  width: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
`;

const SkeletonElement: React.FC = () => {
  return (
    <SkeletonContainer>
      <SkeletonRow></SkeletonRow>
    </SkeletonContainer>
  );
};

export default SkeletonElement;
