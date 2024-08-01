package com.ssafy.dreamong.domain.entity.dream.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class SquareDetailResponse {
    private String summary;
    private String content;
    private List<CommentResponse> comments;
}
